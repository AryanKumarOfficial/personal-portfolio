"use client";

import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ClipboardCopy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type EnvVariable = {
  name: string;
  value: string;
  category: string;
};

interface EnvViewerProps {
  envVariables: EnvVariable[];
}

export function EnvViewer({ envVariables }: EnvViewerProps) {
  const [visibleValues, setVisibleValues] = useState<Record<string, boolean>>({});
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  // Group variables by category
  const categorizedVariables = envVariables.reduce<Record<string, EnvVariable[]>>(
    (acc, variable) => {
      if (!acc[variable.category]) {
        acc[variable.category] = [];
      }
      acc[variable.category].push(variable);
      return acc;
    },
    {}
  );

  const toggleVisibility = (name: string) => {
    setVisibleValues((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const copyToClipboard = (name: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      // Clear any existing timeout for this variable
      if (timeoutRefs.current[name]) {
        clearTimeout(timeoutRefs.current[name]);
      }

      // Set copied state to true
      setCopiedStates((prev) => ({
        ...prev,
        [name]: true,
      }));

      // Set a timeout to revert the copied state after 2 seconds
      timeoutRefs.current[name] = setTimeout(() => {
        setCopiedStates((prev) => ({
          ...prev,
          [name]: false,
        }));
      }, 2000);
    });
  };

  return (
    <div className="w-full border rounded-lg shadow-sm bg-white dark:bg-gray-950">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Environment Variables</h2>
      </div>
      <Tabs defaultValue={Object.keys(categorizedVariables)[0]} className="p-4">
        <TabsList className="mb-4">
          {Object.keys(categorizedVariables).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(categorizedVariables).map(([category, variables]) => (
          <TabsContent key={category} value={category}>
            <div className="space-y-2">
              {variables.map((variable) => (
                <div 
                  key={variable.name}
                  className="flex items-center justify-between p-3 rounded-md bg-gray-50 dark:bg-gray-900"
                >
                  <div>
                    <div className="font-medium">{variable.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {visibleValues[variable.name] ? variable.value : "••••••••••••••••••••••••••"}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => toggleVisibility(variable.name)}
                      aria-label={visibleValues[variable.name] ? "Hide value" : "Show value"}
                    >
                      {visibleValues[variable.name] ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(variable.name, variable.value)}
                      className={cn(
                        copiedStates[variable.name] && "text-green-500 border-green-500"
                      )}
                      aria-label="Copy to clipboard"
                    >
                      {copiedStates[variable.name] ? <Check size={16} /> : <ClipboardCopy size={16} />}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
