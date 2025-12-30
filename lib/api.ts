export async function getAutomation(id: string) {
  const res = await fetch(`/api/automations/${id}`);
  if (!res.ok) throw new Error("Failed");
  const { automation } = await res.json();
  return automation;
}

export async function getAllAutomations() {
  const res = await fetch("/api/automations");
  const { status, message, automations } = await res.json();

  if (status != 200)
    console.log(
      "Some error occured in fetching automations in automations.tsx ",
      message
    );

  // const normalized = automations?.map((s: Automation) => {
  //   const item = {
  //     ...s,
  //     createdAt: new Date(s.createdAt),
  //   };
  //   queryClient.setQueryData(["user-automations", item.id], item);

  //   return item;
  // });

  return automations;
}
