export default function GlassCard({ children, className = '', tag = 'section' }) {
  return `<${tag} class="glass-card ${className}">${children}</${tag}>`;
}
