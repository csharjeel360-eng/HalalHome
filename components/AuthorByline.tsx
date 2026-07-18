type AuthorBylineProps = {
  name?: string
  bio?: string
}

export default function AuthorByline({
  name = 'Sharjeel',
  bio = 'Sharjeel is the founder of Egtafy, an independent Islamic home financing calculator built to help Pakistani families understand halal financing clearly.',
}: AuthorBylineProps) {
  return (
    <div className="mt-8 rounded-[1.25rem] border border-line/70 bg-cream/70 px-5 py-4 text-sm text-ink/70 shadow-[0_10px_30px_-20px_rgba(22,35,31,0.3)]">
      <p className="font-medium text-ink">Written by {name}, founder of Egtafy</p>
      <p className="mt-1">{bio}</p>
    </div>
  )
}
