const { DefaultArtifactClient } = require("@actions/artifact");

export async function uploadArtifact(s0) {
  const artifactClient = new DefaultArtifactClient();
  const artifactName = "metric-artifact-new";
  const files = ["metric.json"];
  const rootDirectory = ".";

  try {
    // 🔹 Delete existing artifact (GitHub now requires this)
    await artifactClient.deleteArtifact(artifactName);

    // 🔹 Upload the new artifact
    const response = await artifactClient.uploadArtifact(
      artifactName,
      files,
      rootDirectory
    );
    console.log("Artifact uploaded:", response);
  } catch (error) {
    console.error("Error uploading artifact:", error);
  }
}
