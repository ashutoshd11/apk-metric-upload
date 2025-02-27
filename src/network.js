const { DefaultArtifactClient } = require("@actions/artifact");

export async function uploadArtifact(s0) {
  const artifactClient = new DefaultArtifactClient();
  const artifactName = `metric-artifact-new-${Date.now()}`;
  const files = ["metric.json"];
  const rootDirectory = ".";

  try {
    // 🔹 Delete existing artifact (GitHub now requires this)
    console.log("Deleting existing artifact...");
    const { id, size } = await artifactClient.deleteArtifact(
      "metric-artifact-new"
    );
    console.log("Artifact deleted:", id, size);

    // 🔹 Upload the new artifact
    console.log("Uploading artifact...");
    const response = await artifactClient.uploadArtifact(artifactName, files);
    console.log("Artifact uploaded:", response);
  } catch (error) {
    console.error("Error uploading artifact:", error);
  }
}
