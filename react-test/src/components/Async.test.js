
import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async compoment',()=>{

    test('renders post if request succeeds',  async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id : 'p1', title: 'First post'}],
       });
        // Arrange
        render(<Async/>);

        //Act
        
 

        //Assert
        const listItemElements =  await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
        expect(listItemElements[0]).toHaveTextContent('First post');


    });

});