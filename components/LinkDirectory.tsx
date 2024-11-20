export default function LinkDirectorySection() {
    const links = [
      {
        name: "Proven Expert",
        url: "https://www.provenexpert.com/zdravie-v-praxi/",
        description: "Profil na Proven Expert pre hodnotenie a recenzie.",
      },
      {
        name: "Metal Archives",
        url: "https://www.metal-archives.com/users/andrejsrna",
        description: "Profil na Metal Archives.",
      },
      {
        name: "Linktree",
        url: "https://linktr.ee/zdravievpraxi?utm_source=linktree_profile_share&ltsid=38f17cfe-6659-42bc-8792-554e6475906c",
        description: "Odkazy na rôzne profily a zdroje na Linktree.",
      },
      {
        name: "Zdravie v modernom svete",
        url: "https://docs.google.com/document/d/e/2PACX-1vTrqxcFEnQNOBBTBDn4H_GW588ap5Kh_4LLhl4O3Jsv6XxTUhcvjKM3-cpjE2gtDx2Q-mC2IS_9c_lE/pub",
        description: "Článok: Zdravie v modernom svete.",
      },
      {
        name: "Zdravie bez liekov",
        url: "https://www.evernote.com/shard/s742/client/snv?isnewsnv=true&noteGuid=f0004622-91df-7f79-51ed-b90a4efd4486&noteKey=LjDutyw36bDUiLFywQLcz-_muAU0RPmC7MT6aQ5aXf7sivTDvhQckPkPkQ&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs742%2Fsh%2Ff0004622-91df-7f79-51ed-b90a4efd4486%2FLjDutyw36bDUiLFywQLcz-_muAU0RPmC7MT6aQ5aXf7sivTDvhQckPkPkQ&title=Zdravie%2Bbez%2Bliekov%253A%2BPr%25C3%25ADstupy%2Ba%2Bstrat%25C3%25A9gie%2Bna%2Bpodporu%2Bzdravia%2Bprirodzen%25C3%25BDmi%2Bmet%25C3%25B3dami",
        description: "Článok: Zdravie bez liekov.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-10 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Rozcestník</h2>
          <p className="text-center text-gray-700 mb-6">
            Naše profily, zaujímavé články a ďalšie informácie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white"
              >
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  