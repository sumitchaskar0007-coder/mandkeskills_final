import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function HackingPage() {
  return <CourseLandingPage course={coursePages.hacking} />;
}
