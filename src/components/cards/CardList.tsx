import {useContext, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import {fetchCards} from '../../api/cards'
import {AppContext} from '../../store/context'
import {CardEditor} from './CardEditor'
import {CardEntry} from './CardEntry'
import {Table} from "../table.styles.ts";

export const CardList = () => {
    const {cards, dispatch} = useContext(AppContext)

    useEffect(() => {
        const onMount = async () => {
            const cards = await fetchCards()
            dispatch({type: 'set-cards', cards})
        }
        onMount()
    }, [dispatch])

    return (
        <div>
            <Heading>Add Card</Heading>
            <CardEditor id="" back="" front="" type="add"/>
            <Table>
                {cards.map(card => (
                    <CardEntry key={card.id} card={card}/>
                ))}
                <Outlet/>
            </Table>
        </div>
    )
}


const Heading = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 600;
`
