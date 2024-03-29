import { Hero } from "../components/blocks/hero";
import { Layout } from "../components/layout";

export default function FourOhFour() {
  return (
    <Layout>
      <Hero
        data={{
          color: "default",
          headline: "404 – Page Not Found",
          text: "Oops! It seems there's nothing here.",
          actions: [
            {
              label: "Return Home",
              type: "button",
              link: "/",
            },
          ],
        }}
      />
    </Layout>
  );
}
