

export default function FeatureCard({ title, subtitle, description, image }) {
  return (
    <div className="text-center max-w-xs mx-auto mb-8 md:mb-0">
      <img src={image} alt={title} className="w-36 h-36 mx-auto mb-4" />
      <h2 className="font-bold text-lg">{title}</h2>
      <h3 className="text-xl mb-2">{subtitle}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
