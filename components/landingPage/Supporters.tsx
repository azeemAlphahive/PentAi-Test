import { Container } from "@/components/ui/Container";

export function Supporters() {
  return (
    <div className="py-12 sm:pt-[130px] sm:pb-[128px]">
      <Container>
        <h3 className="text-center text-[24px] font-[dm-semibold] text-white">
          Our Supporters
        </h3>
        <div className="mt-[47px] grid grid-cols-2 gap-x-12 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="text-[20px] font-[dm] text-white">
              Supporter–logo
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
