import { Link } from "wouter";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import CTAButton from "../components/layout/CTAButton";

export default function NotFound() {
  return (
    <Section variant="default" size="lg" className="min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="mb-4">404</h1>
        <p className="text-text-muted mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" asChild>
          <CTAButton variant="primary">Back to Home</CTAButton>
        </Link>
      </Container>
    </Section>
  );
}
