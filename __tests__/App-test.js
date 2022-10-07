/**
 * @format
 */


import React from 'react';
import {render, screen, act,fireEvent } from '@testing-library/react-native';
import App  from '../App';
import MyListView from '../components/MyListView'
import { FlatList } from 'react-native';
import MyModal from '../components/MyModal'


describe('App', () => {
  it('renders the App', async () => {
     await render(<App />);
  });


  it('renders loader', async () => {
    await render(<App />);
    await expect(screen.getByAccessibilityHint('loading')).toBeTruthy();
  });
  
  


});

const mockDatas = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
]

describe('Testing FlatList', () => {
    test('Flatlist Rendering', () => {
      render(<MyListView data={mockDatas} />)
      expect(screen.getByTestId("list")).toBeTruthy();
     
    })

    it('FlatList OnClick', async () => {
      render(<MyListView data={mockDatas} />)
      const filter = screen.getByTestId('0');
      fireEvent.press(filter);

    });
    
})

describe('Testing Modal', () => {
  test('Modal Rendering', () => {
    render(<MyModal  modalVisible={true} selectedRow={mockDatas[0]} dismissModal={false} />)
    expect(screen.getByTestId("modal")).toBeTruthy();
   
  })

  it('Modal close', async () => {
    render(<MyModal  modalVisible={true} selectedRow={mockDatas[0]} dismissModal={false} />)
    const filter = screen.getByTestId('close');
    fireEvent.press(filter);

  });

 
  
})




