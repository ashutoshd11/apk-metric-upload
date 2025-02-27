const { DefaultArtifactClient } = require("@actions/artifact");

export function uploadArtifact(s0) {
  const artifact = new DefaultArtifactClient();
  const artifactName = "metric-artifact-new";
  const files = [`metric.json`];
  const rootDirectory = `.`;
  const options = {
    continueOnError: false,
    overwrite: true,
  };

  artifactClient.uploadArtifact(artifactName, files, rootDirectory, options);
}
