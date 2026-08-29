import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" crumb="404" image="/images/Picture5.jpg" />
      <section className="section">
        <div className="row" style={{ textAlign: "center" }}>
          <p style={{ fontSize: 18 }}>
            The page you are looking for does not exist.{" "}
            <Link href="/" style={{ color: "var(--pink)" }}>
              Return to the homepage
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
