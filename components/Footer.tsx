// Footer Component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-secondary/50">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">PONTISLABS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              실제 프로덕트를 만들어본 팀이,<br />
              당신의 비즈니스에 AI를 붙입니다.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: contact@pontislabs.com</p>
              <p>카카오톡: @pontislabs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} PONTISLABS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
