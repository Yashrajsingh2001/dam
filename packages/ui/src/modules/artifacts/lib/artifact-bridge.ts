import type { LibraryArtifact } from "api-server-api";

export function canUseArtifactBridge(
  artifact: LibraryArtifact | null | undefined,
  agentId: string | null,
  version: number | undefined,
): boolean {
  return (
    artifact?.interactive === true &&
    artifact.kind === "html" &&
    artifact.visibility !== "public" &&
    agentId !== null &&
    artifact.agentId === agentId &&
    artifact.version === version
  );
}
