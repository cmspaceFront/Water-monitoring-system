export async function fetchAllRecords(ds, where, outFields = ["*"], batchSize = 4000) {
  let offset = 0;
  let allRecords = [];
  while (true) {
    const result = await ds.query({
      where,
      outFields,
      returnGeometry: false,
      resultOffset: offset,
      resultRecordCount: batchSize,
    });
    allRecords = allRecords.concat(result.records || []);
    if (!result.records || result.records.length < batchSize) break;
    offset += batchSize;
  }
  return allRecords;
} 