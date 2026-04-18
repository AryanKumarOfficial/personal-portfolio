import Image from "next/image";
import { ImageResponse } from "next/og";

// Metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <img
      alt="Aryan Kumar"
      src="https://www.aryankumarofficial.dev/images/logo.jpg"
      width="32"
      height="32"
      style={{ objectFit: "cover" }}
    />,
    {
      ...size,
    },
  );
}
