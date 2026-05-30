import PageBanner from "../../components/shared/PageBanner";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About");

  return (
    <div className="min-h-screen bg-[#071028] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <PageBanner
          title="About GarmentsPro"
          subtitle="Modern garments production and order tracking platform."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black text-white">
              Who We Are
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              GarmentsPro helps factories manage
              production workflows, orders,
              approvals, inventory and shipping
              in a modern digital platform.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
              Our goal is to simplify garment
              manufacturing operations through
              clean dashboards, tracking systems,
              analytics and workflow automation.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-xl
            "
          >
            <h3 className="text-3xl font-bold text-white">
              Why Choose Us
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Production Tracking",
                "Role-Based Dashboard",
                "Real-Time Order Updates",
                "Modern Analytics",
                "Secure Authentication",
              ].map(item => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    bg-white/5
                    p-5
                    text-white
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;