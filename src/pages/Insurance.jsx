import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function InsurancePage() {
  return <CourseLandingPage course={coursePages.insurance} />;
}
