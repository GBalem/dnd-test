

import styles from '../Card/Card.module.scss'

const urlBase = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'

const Card = ({ movie }) => {
	return (
		<div className={ styles.container }>
			<img className={ styles.poster } src={urlBase + movie.poster_path} alt={ movie.title } />
			<div className={ styles.generalInforations }>
				<div className={ styles.dates }>
					<p className={ styles.title }>{ movie.title }</p>
					<p className={ styles.titleOriginal }>{ movie.original_title } - { movie.original_language }</p>
				</div>
				<div className={ styles.otherInformations }>
					<p>Lançamento: { new Date(movie.release_date).toLocaleDateString('pt-br') }</p>
					<p>Popularidade: { movie.popularity }</p>
					<p>Nota: { movie.vote_average }</p>
				</div>
			</div>
		</div>
	);
}

export default Card