import React from 'react'
import { Button, Icon, Input, Modal } from 'semantic-ui-react'


export default function ButtonExample() {
  return (
    <div>
      <Button icon="like" />
      <Button color='red'>
        <Icon name='heart' />
      </Button>

      {/* 💡 'color' and 'name' will be used as <Icon /> element's props */}
      <Button content='Like' icon={{ color: 'red', name: 'like' }} />
      {/* 💡 you can also add handlers and any DOM props to shorthands */}
      <Input
        action={{
          icon: 'search',
          onClick: () => console.log('An action was clicked!'),
        }}
        actionPosition='right'
        placeholder='Search...'
      />
      <Modal trigger={<Button>Show</Button>} content='Content' />
      {/* 💡 has identical effect to the previous one */}
      <Modal trigger={<Button>Show</Button>} content={{ content: 'Content' }} />
      {/* ⛔ example below has broken styling, see section about React Element */}
      <Modal trigger={<Button>Show</Button>} content={<div>Content</div>} />
    </div>
  )
}
