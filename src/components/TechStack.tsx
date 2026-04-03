import { ReactButton, TypescriptButton, NodeJsButton, FlutterButton, DartButton, TailwindButton, ExpressButton, SqlButton } from "./TechButtons";

export default function TechStack() {
  return (
    <div className="space-y-3">
      <p className=" text-muted-foreground text-sm">I&apos;ve played with a lot of tech over the years. This is what stuck.</p>

      <div className="grid grid-cols-3 border border-border rounded-md  text-sm">
        <p className="font-semibold text-center border-b border-r border-border p-2">Web</p>
        <p className="font-semibold text-center border-b border-r border-border p-2">Server/API</p>
        <p className="font-semibold text-center border-b border-border p-2">iOS/Android</p>

        <div className="flex flex-col gap-2 items-center p-2 border-r border-border">
          <ReactButton />
          <TypescriptButton />
          <TailwindButton />
        </div>
        <div className="flex flex-col gap-2 items-center p-2 border-r border-border">
          <NodeJsButton />
          <ExpressButton />
          <SqlButton />
        </div>
        <div className="flex flex-col gap-2 items-center p-2 border-border">
          <FlutterButton />
          <DartButton />
        </div>
      </div>
    </div>
  );
}
