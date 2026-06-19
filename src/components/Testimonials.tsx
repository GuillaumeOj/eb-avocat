import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { REVIEW_URL, TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
	return (
		<section id="temoignages" className="bg-primary py-20">
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeading light>{TESTIMONIALS.sectionTitle}</SectionHeading>
				<div className="flex flex-wrap justify-center gap-6">
					{TESTIMONIALS.items.map((t, i) => (
						<div key={t.author} className="w-full md:max-w-md md:flex-1 md:basis-80">
							<TestimonialCard quote={t.quote} author={t.author} delay={i * 100} />
						</div>
					))}
				</div>
				<div className="mt-12 flex justify-center">
					<a
						href={REVIEW_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded border-2 border-white px-8 py-3 font-500 text-base text-white transition-all duration-300 hover:bg-white/10"
					>
						<Star className="h-5 w-5" strokeWidth={1.5} />
						Laisser un avis
					</a>
				</div>
			</div>
		</section>
	);
}
