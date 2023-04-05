export default function Stats () {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-12">
      <div className="flex flex-col lg:items-center lg:flex-row xl:max-w-6xl xl:mx-auto">
        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
          <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-blue-100 dark:bg-primary-500 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
            <span className="w-fit">
              <svg
                className="w-10 h-10 text-primary-500 dark:text-white sm:w-16 sm:h-16 xl:w-20 xl:h-20"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M260.353,254.878,131.538,33.1a2.208,2.208,0,0,0-3.829.009L.3,254.887A2.234,2.234,0,0,0,.3,257.122L129.116,478.9a2.208,2.208,0,0,0,3.83-.009L260.358,257.113A2.239,2.239,0,0,0,260.353,254.878Zm39.078-25.713a2.19,2.19,0,0,0,1.9,1.111h66.509a2.226,2.226,0,0,0,1.9-3.341L259.115,33.111a2.187,2.187,0,0,0-1.9-1.111H190.707a2.226,2.226,0,0,0-1.9,3.341ZM511.7,254.886,384.9,33.112A2.2,2.2,0,0,0,382.99,32h-66.6a2.226,2.226,0,0,0-1.906,3.34L440.652,256,314.481,476.66a2.226,2.226,0,0,0,1.906,3.34h66.6a2.2,2.2,0,0,0,1.906-1.112L511.7,257.114A2.243,2.243,0,0,0,511.7,254.886ZM366.016,284.917H299.508a2.187,2.187,0,0,0-1.9,1.111l-108.8,190.631a2.226,2.226,0,0,0,1.9,3.341h66.509a2.187,2.187,0,0,0,1.9-1.111l108.8-190.631A2.226,2.226,0,0,0,366.016,284.917Z"></path>
              </svg>
            </span>
          </div>
          <div>
            <p className="md:mb-1 md:text-lg">Global Readers</p>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl">
              10,312
            </h3>
          </div>
        </div>
        <div className="lg:w-1/2">
          <p>
          Money is a social construct. It only has value because we have all agreed to give it value. It&apos;s a tool we use to exchange goods and services, but it&apos;s not the only tool. There are many other ways to create value, and many other forms of currency, such as time, attention, and relationships.
          </p>
        </div>
      </div>
    </div>
  )
}