



import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Card from '../Card'
import styles from '../List/List.module.scss'

// let movieLists = []

const List = () => {
	const [movieList, setMovieList] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(async () => {
		const res = await fetch(`api/hello`)
		const { movieList } = await res.json()
		setMovieList(movieList)
		setLoading(true)
	}, [])

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(movieList)
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem)

		setMovieList(items)

	}

	
	return (
		<div className={ styles.list }>
			<header className={ styles.title }>Lista Teste</header>
			<DragDropContext onDragEnd={ handleOnDragEnd }>
				<Droppable droppableId="movieList">
					{(provided) => (
						<div { ...provided.droppableProps } ref={ provided.innerRef }>
							{movieList.map((movie, index) => {
								return (
											<Draggable key={ movie.title } draggableId={ movie.title } index={ index }>
												{(provided) => (
													<div { ...provided.draggableProps } { ...provided.dragHandleProps } ref={ provided.innerRef }>
														<Card movie= { movie } />
													</div>
												)}
											</Draggable>
								)
							})}
							{provided.placeholder}
						</div>
				)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}

export default List