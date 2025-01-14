import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {

    test('renders hello world text ',() => {
        render(<Greeting/>);
    
        const helloEle = screen.getByText('Hello World !');
    
        expect(helloEle).toBeInTheDocument();
    
    });

    test('renders changed button not clicked',() => {

        render(<Greeting/>);

        const changeTextFalse = screen.getByText(' good to see you',{exact:false});
        expect(changeTextFalse).toBeInTheDocument();


    });

    test('renders clicked message using getByText',() => {

        // Arrange
        render(<Greeting/>);

        //Act
        const buttonEle = screen.getByText('It\'s good to see you!');
        userEvent.click(buttonEle);

        //Assert
        const changeTextClick = screen.getByText('Change Text!');
        expect(changeTextClick).toBeInTheDocument(); 

    });


    test('renders clicked message using getByRole', () => {

        // Arrange
        render(<Greeting/>);

        // Act
        const buttonElm = screen.getByRole('button');
        userEvent.click(buttonElm);

        //Assert
        const changeTxt = screen.getByText('Change Text!');
        expect(changeTxt).toBeInTheDocument();
    });

    test('renders clicked message It\'s good to see you! is not visible ', () => {

        // Arrange
        render(<Greeting/>);

        // Act
        const buttonElm = screen.getByRole('button');
        userEvent.click(buttonElm);

        //Assert
      
        const otherTxt = screen.queryAllByText('It\'s good to see you!');
        expect(otherTxt).toBeNull
    });

    

});
