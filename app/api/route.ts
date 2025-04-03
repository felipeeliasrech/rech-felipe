export async function GET() {
  const skills = [
    { id: 1, title: "Typescript" },
    { id: 2, title: "ReactJS" },
    { id: 3, title: "MySQL" },
    { id: 4, title: "NodeJS" },
  ];

  return new Response(JSON.stringify(skills), {
    status: 200,
  });
}
