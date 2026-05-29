import Container from "../shared/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <Container>
        <div className="py-14 grid md:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-3xl font-black mb-4 gradient-text">
              GarmentsX
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium garments manufacturing and
              production tracking platform for
              global buyers and industrial teams.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Platform
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Analytics</p>
              <p>Tracking</p>
              <p>Products</p>
              <p>Dashboard</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-500">
          © 2026 GarmentsX. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;