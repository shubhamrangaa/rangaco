import ItrYearGuide, { itrYearMetadata } from "@/components/itr/ItrYearGuide";
import { getItrYear } from "@/content/itr-years";

const year = getItrYear(2025);
export const metadata = itrYearMetadata(year);

export default function Page() {
  return <ItrYearGuide year={year} />;
}
