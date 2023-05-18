

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <img className="h-12" src="/logo.svg" alt="Animal Toys" />
        <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies elit eu odio consectetur, nec dictum risus molestie. Sed aliquam, arcu quis sagittis eleifend, mauris lectus tristique erat, sit amet varius ex nunc in odio.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li>
            <svg className="w-6 h-6 text-gray-300 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 7c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
            </svg>
            <span className="text-gray-300 ml-2">123 Main Street, Anytown USA</span>
          </li>
          <li>
            <svg className="w-6 h-6 text-gray-300 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM12 4.143c-.972 0-1.761.81-1.761 1.809s.789 1.809 1.761 1.809 1.761-.81 1.761-1.809-.789-1.809-1.761-1.809zM18.252 8H5.748c-.448 0-.813.373-.813.833v8.334c0 .46.365.833.813.833h12.504c.448 0 .813-.373.813-.833V8.833c0-.46-.365-.833-.813-.833z" />
            </svg>
            <span className="text-gray-300 ml-2">contact@example.com</span>
          </li>
          <li>
            <svg className="w-6 h-6 text-gray-300 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-12h-4v6l4.75 2.85.25.15V6z" />
            </svg>
            <span className="text-gray-300 ml-2">123-456-7890</span>
          </li>
        </ul>
      </div>
    </div>
    <hr className="my-8 border-gray-600" />
    <div className="flex justify-between items-center">
      <p className="text-gray-300">© 2023 Animal Toys. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.72 17.28c-.34.58-1.03.96-1.78.96H9.06c-.75 0-1.43-.38-1.78-.96L4.81 15.5c-.33-.57-.33-1.27 0-1.84L7.28 9.72c.35-.58 1.03-.96 1.78-.96h5.88c.75 0 1.43.38 1.78.96l2.47 3.94c.33.57.33 1.27 0 1.84l-2.47 3.94z" />
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.29 13.29c-.06.47-.29.89-.65 1.25s-.78.58-1.25.65c-.47.06-.94.03-1.38-.12s-.82-.4-1.12-.7c-.29-.29-.51-.63-.67-1.01s-.24-.78-.23-1.2V12h2.5v.46c0 .14.03.27.08.39s.13.22.22.31c.1.1.22.18.36.23s.29.08.47.08h.23c.46 0 .83-.16 1.11-.47s.43-.74.43-1.34c0-.46-.11-.82-.34-1.07s-.54-.37-.97-.42c.5-.1.89-.3 1.17-.6s.42-.73.42-1.26c0-.45-.13-.82-.4-1.12s-.64-.47-1.12-.53c.48-.06.88-.24 1.21-.53s.52-.69.52-1.19c0-.4-.12-.75-.35-1.06s-.56-.48-1-.56c-.27-.05-.59-.08-.97-.08h-.58V3.79c.19-.01.41-.02.66-.02h.66c.59 0 1.05.08 1.39.25s.66.42.88.76c.23.34.38.79.45 1.34h2.51c-.02-.39-.1-.72-.23-.99s-.35-.51-.63-.71c-.28-.19-.64-.33-1.06-.41s-.88-.13-1.4-.13h-.34c-.68 0-1.24.08-1.68.24s-.8.4-1.1.71s-.52.67-.68 1.09s-.24.87-.24 1.39V12h2.5v-.46c0-.14-.03-.27-.08-.39s-.13-.22-.22-.31c-.1-.1-.22-.18-.36-.23s-.29-.08-.47-.08h-.23c-.46 0-.83.16-1.11.47s-.43.74-.43 1.34c0 .46.11.82.34 1.07s.54.37.97.42c-.5.1-.89.3-1.17.6s-.42.73-.42 1.26c0 .45.13.82.4 1.12s.64.47 1.12.53c-.48.06-.88.24-1.21.53s-.52.69-.52 1.19c0 .4.12.75.35 1.06s.56.48 1 .56c.27.05.59.08.97.08h.58v.96h-.66c-.59 0-1.05-.08-1.39-.25s-.66-.42-.88-.76s-.38-.79-.45-1.34h-2.51c.02.39.1.72.23.99s.35.51.63.71s.64.33 1.06.41s.88.13 1.4.13h.34c.68 0 1.24-.08 1.68-.24s.8-.4 1.1-.71s.52-.67.68-1.09s.24-.87.24-1.39V12z" />
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.83 17.16c-.32.13-.65.23-.99.29.36-.22.64-.57.77-.99s.16-.84.08-1.28c.14-.25.21-.52.21-.79c0-.25-.07-.49-.21-.72s-.33-.42-.58-.57s-.53-.25-.84-.28s-.63-.02-.94.1s-.57.33-.78.64s-.38.66-.45 1.05s-.06.84.1 1.23s.43.68.82.87s.86.3 1.33.27c.24 0 .49-.04.73-.12s.45-.2.64-.35s.35-.32.48-.52s.24-.44.31-.68s.1-.48.1-.72c0-.43-.09-.85-.26-1.25s-.42-.76-.74-1.06s-.68-.53-1.09-.7s-.85-.25-1.31-.22s-.91.13-1.31.42s-.72.66-.9 1.12s-.26.96-.22 1.47h.96c0-.51.17-.94.5-1.27s.75-.5 1.27-.5s.94.17 1.27.5s.5.75.5 1.27s-.17.94-.5 1.27s-.75.5-1.27.5c-.17 0-.35-.03-.52-.08s-.32-.13-.47-.22s-.28-.21-.39-.36s-.19-.34-.24-.54s-.07-.42-.07-.65h2.03c.01.24 0 .49-.05.72z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;