import Markdown from "react-markdown";
import useStore from "../store";
import { Skeleton } from "@mui/material";

const Display = () => {
  const answer = useStore((state) => state.response);
  const question = useStore((state) => state.question);
  const isLoading = useStore((state) => state.loading);
  return (
    <div className="px-12 py-8 text-white max-w-full space-y-4">
      {question && <p className="font-bold">You: {question}</p>}
      {!isLoading ? (
        <Markdown>{`Gemini: ${answer}`}</Markdown>
      ) : question ? (
        <div className="space-y-4">
          {" "}
          <Skeleton variant="rounded" width={1280} />{" "}
          <Skeleton variant="rounded" width={1280} />{" "}
          <Skeleton variant="rounded" width={1280} />{" "}
          <Skeleton variant="rounded" width={1280} />{" "}
          <Skeleton variant="rounded" width={1280} />{" "}
        </div>
      ) : (
        <div className="h-full grid place-items-center">
          <h1 className="text-4xl">Ask a question</h1>
        </div>
      )}
    </div>
  );
};

export default Display;
