import className from "classnames";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

type IVerticalFeatureRowProps = {
  title: string;
  description: string | ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  button?: ReactNode;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={`${verticalFeatureClass}`}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 sm:text-2xl md:text-3xl">
          {props.title}
        </h3>
        <div className="mt-6 text-lg leading-9 dark:text-slate-200 sm:text-xl">
          {props.description}
        </div>
        {props.button && (
          <div className="whitespace-no-wrap mx-auto my-6">{props.button}</div>
        )}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
