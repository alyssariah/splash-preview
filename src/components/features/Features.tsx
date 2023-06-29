'use client';

export interface FeatureProps {
  features: Array<any>;
}

export default function HomePage({ features }: FeatureProps) {
  return (
    <>
      <div className="flex flex-wrap justify-start py-4">
        {features.map((feature: any, i: number) => {
          return (
            <div
              className="w-[100%] md:w-[49%] xl:w-[33%] flex flex-col items-center my-12"
              key={i}
            >
              <p className="text-body-lg font-bold text-grey-50 font-heading mt-4">
                {feature.title}
              </p>
              <p className="text-center max-w-[300px] text-body-md text-grey-50 mt-2">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
