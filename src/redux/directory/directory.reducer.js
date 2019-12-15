const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'http://c1.peakpx.com/wallpaper/744/347/828/man-in-red-teal-jacket-wearing-5-panel-cap-wallpaper-preview.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80.ibb.co/px2tCc3/https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1526722085281-54220256ee34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1444068700300-d6ef2904d5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1630&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
