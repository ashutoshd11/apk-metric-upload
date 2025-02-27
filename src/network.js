const { DefaultArtifactClient } = require("@actions/artifact");

export async function uploadArtifact(s0) {
  const artifactClient = new DefaultArtifactClient();
  const artifactName = `metric-artifact-new`;
  const files = ["metric.json"];
  const rootDirectory = ".";

  // 🔹 Delete existing artifact (GitHub now requires this)
  console.log("Deleting existing artifact...");
  artifactClient
    .deleteArtifact("artifactName")
    .then((id, size) => {
      console.log("Artifact deleted::::", id, size);
    })
    .catch((error) => {
      console.log("No existing artifact found::::", error);
    })
    .finally(async () => {
      // 🔹 Upload artifact
      console.log("Uploading artifact...");
      artifactClient
        .uploadArtifact(artifactName, files, rootDirectory)
        .then(async (id, size) => {
          console.log("Artifact uploaded::::", id, size);
        })
        .catch(async (error) => {
          console.log("Error uploading artifact::::", error);
          process.exit(1);
        });
    });
}
