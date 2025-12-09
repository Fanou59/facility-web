import PageContainer from "@/components/layout/page-container";
import Section from "@/components/shared/section";

export default function PolitiqueCookie() {
  return (
    <PageContainer>
      <Section title="Politique de cookies">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Qu'est-ce qu'un "cookie" ?
          </h2>

          <p>
            Les cookies sont de petits fichiers texte qu'un site web enregistre
            sur votre ordinateur ou votre appareil mobile lorsque vous visitez
            le site.
          </p>

          <p>
            Ils facilitent votre expérience en ligne en sauvegardant les
            informations de navigation. Grâce aux cookies, les sites peuvent
            vous garder connecté, se souvenir de vos préférences de site et vous
            proposer un contenu personnalisé. Les cookies peuvent également être
            utilisés pour établir des statistiques sur l'expérience de
            navigation et pour montrer des publicités ciblées.
          </p>

          <p>En général, les cookies peuvent être classés par :</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Domaine :</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Les{" "}
              <span className="font-semibold">cookies de première partie</span>{" "}
              sont émis par un site web qu'un utilisateur consulte directement.
            </li>
            <li>
              Les <span className="font-semibold">cookies tiers</span> ne sont
              pas créés par le site web consulté, mais par un tiers comme Google
              Analytics, DoubleClick, Facebook, Twitter, LinkedIn, Youtube,
              Vimеo, etc.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Objectif :</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Les{" "}
              <span className="font-semibold">
                cookies strictement nécessaires
              </span>{" "}
              sont requis pour que le site web fonctionne correctement.
            </li>
            <li>
              Les <span className="font-semibold">cookies de préférences</span>{" "}
              permettent à un site web de se souvenir des choix que vous avez
              faits dans le passé.
            </li>
            <li>
              Les <span className="font-semibold">cookies de statistiques</span>{" "}
              aident le propriétaire du site web à collecter des données
              statistiques et à comprendre comment les visiteurs interagissent
              avec le site web.
            </li>
            <li>
              Les <span className="font-semibold">cookies marketing</span>{" "}
              suivent l'activité en ligne de l'utilisateur pour aider les
              annonceurs à diffuser des publicités plus pertinentes.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Durée :</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Les <span className="font-semibold">cookies de session</span> qui
              sont effacés lorsque l'utilisateur ferme le navigateur.
            </li>
            <li>
              Les <span className="font-semibold">cookies persistants</span> qui
              restent sur le dispositif de l'utilisateur pendant une certaine
              période de temps.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Quels sont les cookies et traceurs que nous utilisons ?
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            1. Cookies strictement nécessaires (gestion du consentement)
          </h3>
          <p className="mb-4">
            Ces cookies sont indispensables au bon fonctionnement du site et ne
            nécessitent pas votre consentement. Ils servent notamment à
            enregistrer votre choix concernant les autres cookies. La gestion de
            votre consentement est assurée par notre solution partenaire,
            Axeptio.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Nom du cookie
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Domaine
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Expiration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    axeptio_all_vendors
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Première partie
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    6 mois 1 semaine
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Ce cookie est utilisé pour enregistrer les préférences de
                    consentement des utilisateurs concernant l'utilisation des
                    cookies sur le site web.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    axeptio_cookies
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Première partie
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    6 mois 1 semaine
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Ce cookie est utilisé pour enregistrer les préférences des
                    visiteurs concernant l'utilisation des cookies sur le site
                    web. Il permet au site web de se souvenir des cookies que
                    l'utilisateur a acceptés et auxquels il a consenti, assurant
                    une meilleure expérience utilisateur lors de la navigation
                    sur le site.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    axeptio_authorized_vendors
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Première partie
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    6 mois 1 semaine
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Ce cookie est utilisé pour stocker les préférences de
                    consentement du visiteur pour les différents types de
                    cookies utilisés sur le site web.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-3">
            2. Cookies de Statistiques (Google Analytics)
          </h3>
          <p className="mb-4">
            Ces cookies (ou traceurs) nous permettent de mesurer l'audience de
            notre site, d'analyser le comportement de navigation et d'évaluer
            les performances de nos services.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">Base Légale : </span>Leur dépôt
              est strictement fondé sur votre consentement exprès. Si vous
              n'acceptez pas ces cookies, ils ne seront pas activés et nous ne
              pourrons pas mesurer votre visite.
            </li>
          </ul>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Nom du cookie
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Domaine
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Expiration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    _ga
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Tiers (Google)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">13 mois</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Enregistre un identifiant unique utilisé pour générer des
                    données statistiques sur la façon dont le visiteur utilise
                    le site.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    _gid
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Tiers (Google)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">24 heures</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Enregistre un identifiant unique utilisé pour générer des
                    données statistiques sur la façon dont le visiteur utilise
                    le site.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">
                    _gat
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    www.product-axis.fr
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Tiers (Google)
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">Session</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Utilisé par Google Analytics pour limiter le taux de
                    demande.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Vos préférences concernant les cookies
          </h2>

          <p>
            Quand vous arrivez pour la première fois sur le site, un bandeau
            cookie vous propose d'accepter ou de refuser les Cookies qui ne sont
            pas essentiels au fonctionnement du site.
          </p>
          <p>
            Vous pouvez retirer ou modifier votre consentement à tout moment, à
            l'exception des cookies nécessaires au fonctionnement stable du
            site. Pour ce faire, vous avez la possibilité de modifier à tout
            moment vos préférences :
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">
                Via le bandeau ou l'icône de gestion des cookies
              </span>{" "}
              disponible en permanence sur le site (généralement en bas de
              page).
            </li>
            <li>
              <span className="font-semibold">
                En paramétrant votre navigateur
              </span>{" "}
              pour bloquer ou supprimer les cookies.
            </li>
          </ul>
        </div>
      </Section>
    </PageContainer>
  );
}
