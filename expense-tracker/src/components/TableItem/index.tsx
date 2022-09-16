import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}


export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColum>{formatDate(item.date)}</C.TableColum>
            <C.TableColum>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColum>
            <C.TableColum>{item.title}</C.TableColum>
            <C.TableColum>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColum>
        </C.TableLine>
        
    );
}