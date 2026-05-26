import TestResult from "../components/testresult";

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Page({ time }) {
  const title = "Server Side Rendering (SSR)";

  if (!time) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'time' was not found. It should have been passed from
        getServerSideProps.
      </TestResult>
    );
  }

  throw new Error("Something went wrong!"); 

  return (
    <TestResult passed={true} title={title}>
      This timestamp 👉 <b>{time}</b> should change every time the page is
      refreshed, because the page is rendered on the server on every request.
    </TestResult>
  );
}
