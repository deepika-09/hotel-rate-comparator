import { Worker } from "@temporalio/worker";

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve(
      "./workflows/hotelSearchWorkflow"
    ),
    activities: require("./activities/supplierActivities"),
    taskQueue: "hotel-search",
  });

  await worker.run();
}

run().catch(console.error);