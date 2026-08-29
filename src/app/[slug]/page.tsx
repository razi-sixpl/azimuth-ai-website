import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import JobBody from "@/components/JobBody";
import { JOBS, getJob } from "@/data/jobs";
import styles from "./job.module.css";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: job.metaTitle,
    alternates: { canonical: `/${job.slug}/` },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        title={job.heroTitle}
        crumb={job.crumb}
        image="/images/WhatsApp-Image-2024-01-08-at-8.32.02-PM-1.jpeg"
        variant="dark"
      />

      <section className={`section ${styles.body}`}>
        <div className="row">
          <JobBody body={job.body} />
        </div>
      </section>
    </>
  );
}
