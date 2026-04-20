import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { sendMessageApi } from "@/lib/api";
import { Contact, contactSchema } from "@/Schema/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BriefcaseBusiness,
  MailQuestion,
  MessageSquare,
  User2,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactForm() {
  const hookform = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const onSubmit = async ({ name, email, message, company }: Contact) => {
    try {
      await sendMessageApi({
        name,
        email,
        message,
        company,
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Failed to send Message");
    } finally {
      hookform.reset();
    }
  };

  return (
    <section className="w-full max-w-xs">
      <form id="contact-form" onSubmit={hookform.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="name"
            control={hookform.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <User2 />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="name"
                    type="text"
                    data-invalid={fieldState.invalid}
                    placeholder="your name"
                    {...field}
                  />
                </InputGroup>
              </Field>
            )}
          />
          <Controller
            name="email"
            control={hookform.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <MailQuestion />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="email"
                    type="email"
                    data-invalid={fieldState.invalid}
                    placeholder="john@example.com"
                    {...field}
                  />
                </InputGroup>
              </Field>
            )}
          />
          <Controller
            name="company"
            control={hookform.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="company">company (Optional)</FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <BriefcaseBusiness />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="company"
                    type="text"
                    data-invalid={fieldState.invalid}
                    placeholder="Meta"
                    {...field}
                  />
                </InputGroup>
              </Field>
            )}
          />
          <Controller
            name="message"
            control={hookform.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="message">message</FieldLabel>
                <InputGroup className="flex justify-center items-center">
                  <InputGroupAddon>
                    <MessageSquare />
                  </InputGroupAddon>
                  <InputGroupTextarea
                    id="message"
                    data-invalid={fieldState.invalid}
                    placeholder="your work is really awesome"
                    {...field}
                  />
                </InputGroup>
              </Field>
            )}
          />

          <Button disabled={hookform.formState.isLoading} type="submit">
            {hookform.formState.isSubmitting ? "sending..." : "send Message"}
          </Button>
        </FieldGroup>
      </form>
    </section>
  );
}
