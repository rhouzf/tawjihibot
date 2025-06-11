import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Factory, Laptop, Leaf, LineChart, ShoppingCart, Wrench } from 'lucide-react';

const SecteursMetiers = () => {
  const secteurs = [
    {
      id: 1,
      title: "Technologies de l'Information",
      icon: Laptop,
      description: "Croissance rapide avec les délocalisations et les sociétés de services numériques marocaines.",
      opportunites: [
        "Développement logiciel",
        "Cybersécurité",
        "Intelligence Artificielle",
        "Cloud Computing"
      ],
      entreprises: "Atos, IBM, Capgemini, OCP Digital"
    },
    {
      id: 2,
      title: "Énergies Renouvelables",
      icon: Leaf,
      description: "Le Maroc vise 52% d'énergies renouvelables d'ici 2030 avec des projets solaires et éoliens majeurs.",
      opportunites: [
        "Ingénierie solaire",
        "Énergie éolienne",
        "Efficacité énergétique",
        "Smart Grids"
      ],
      entreprises: "MASEN, Nareva, Engie, EDF Renouvelables"
    },
    {
      id: 3,
      title: "Aéronautique",
      icon: Briefcase,
      description: "1er exportateur industriel du Maroc avec plus de 140 entreprises et 17 000 emplois directs.",
      opportunites: [
        "Usinage de précision",
        "Câblage aéronautique",
        "Mécanique de précision",
        "Maintenance aéronautique"
      ],
      entreprises: "Bombardier, Safran, Stelia Aerospace, Matis"
    },
    {
      id: 4,
      title: "Automobile",
      icon: Wrench,
      description: "1er exportateur du pays avec plus de 250 000 véhicules produits annuellement.",
      opportunites: [
        "Construction automobile",
        "Pièces détachées",
        "Ingénierie automobile",
        "Mobilité électrique"
      ],
      entreprises: "Renault, Stellantis, Yazaki, Leoni"
    },
    {
      id: 5,
      title: "Agroalimentaire",
      icon: ShoppingCart,
      description: "2ème secteur exportateur avec une forte croissance dans la transformation des produits agricoles.",
      opportunites: [
        "Transformation des produits agricoles",
        "Emballage alimentaire",
        "Agriculture biologique",
        "Export agroalimentaire"
      ],
      entreprises: "Lesieur Cristal, Centrale Laitière, Bimo, OLVEA"
    },
    {
      id: 6,
      title: "Chimie et Parachimie",
      icon: Factory,
      description: "Secteur en pleine expansion avec la valorisation des phosphates et la chimie verte.",
      opportunites: [
        "Engrais phosphatés",
        "Chimie verte",
        "Cosmétiques",
        "Peintures et vernis"
      ],
      entreprises: "OCP, Managem, Sothema, SIAAP"
    },
    {
      id: 7,
      title: "Finance et Assurance",
      icon: LineChart,
      description: "Marché en pleine digitalisation avec l'émergence des fintechs et l'inclusion financière.",
      opportunites: [
        "Services bancaires digitaux",
        "Assurances",
        "Fintech",
        "Gestion de patrimoine"
      ],
      entreprises: "Attijariwafa Bank, BMCE Bank of Africa, Wafasalaf, HPS"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Secteurs Porteurs au Maroc</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Découvrez les secteurs clés de l'économie marocaine offrant des opportunités professionnelles prometteuses.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secteurs.map((secteur) => (
          <Card key={secteur.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-3">
                <secteur.icon className="h-8 w-8 text-[#2a7686]" />
                <CardTitle className="text-xl">{secteur.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{secteur.description}</p>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Opportunités :</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {secteur.opportunites.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <h3 className="font-semibold text-sm">Entreprises leaders :</h3>
                <p className="text-sm text-gray-600">{secteur.entreprises}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-[#2a7686] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Perspectives d'avenir</h2>
        <p className="mb-4">
          Le Maroc s'est positionné comme une plateforme industrielle compétitive en Afrique, avec des initiatives clés comme :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Le Plan d'Accélération Industrielle 2021-2023</li>
          <li>La Zone de Libre-Échange Continentale Africaine (ZLECAf)</li>
          <li>La stratégie « Génération Green » pour l'agriculture</li>
          <li>Le développement des énergies renouvelables</li>
          <li>La transformation digitale des entreprises et services publics</li>
          <li>L'essor des nouvelles technologies et de l'économie numérique</li>
          <li>La formation aux métiers du numérique et de l'intelligence artificielle</li>
          <li>Le développement des villes intelligentes et des services en ligne</li>
        </ul>
        <p className="mt-4 font-medium">
          Ces secteurs offrent des opportunités tant pour les profils techniques que pour les profils commerciaux et de gestion.
        </p>
      </div>
    </div>
  );
};

export default SecteursMetiers;
