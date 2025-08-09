import Spiget from "spiget-api";

const api = new Spiget("circuit");

async function getTotalDownloads(): Promise<number> {
  const author = await api.getAuthorByID(2210504);
  if (!author) return 0;

  const resources = await author.getResources();
  if (!resources) return 0;

  let downloads = 0;
  for (const resource of resources) {
    downloads += resource.downloads ?? 0;
  }

  return downloads;
}

async function getDownloads(resourceId: number): Promise<number> {
  const author = await api.getAuthorByID(2210504);
  if(!author) return 0;

  const resource = await api.getResource(resourceId);
  if (!resource) return 0;

  let downloads = 0;
  downloads += resource.downloads;

  return downloads;
}

export { getTotalDownloads, getDownloads };