import AutomationPageClient from "./_components/automation-page-client";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <AutomationPageClient id={id} />;
};

export default page;
