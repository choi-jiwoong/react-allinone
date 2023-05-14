import React from 'react'
import { Toolbar, List, ListHeader, ListItem, Icon } from 'react-onsenui'

export default function ListExample() {
  return (
    <div>
      <Toolbar>
        <div class="center">Lists</div>
      </Toolbar>

      <List>
        <ListHeader>Default</ListHeader>
        <ListItem>Item A</ListItem>
        <ListItem>Item B</ListItem>

        <ListHeader>Expandable</ListHeader>
        <ListItem expandable>
          Tap to expand
          <div class="expandable-content">Expandable content</div>
        </ListItem>

        <ListHeader>Tappable / Ripple</ListHeader>
        <ListItem tappable>Tap me</ListItem>

        <ListHeader>Chevron</ListHeader>
        <ListItem modifier="chevron" tappable>Chevron</ListItem>

        <ListHeader>Thumbnails and titles</ListHeader>
        <ListItem>
          <div class="left">
            <img class="ListItem__thumbnail" src="https://placekitten.com/g/40/40" alt='ListItem thumbnail'></img>
          </div>
          <div class="center">
            <span class="ListItem__title">Cutest kitty</span><span class="ListItem__subtitle">On the Internet</span>
          </div>
        </ListItem>

        <ListHeader>Icons</ListHeader>
        <ListItem>
          <div class="left">
            <Icon icon="md-face" class="ListItem__icon"></Icon>
          </div>
          <div class="center">
            Icon
          </div>
        </ListItem>

        <ListHeader>Switch</ListHeader>
        <ListItem>
          <div class="center">
            Turn it on
          </div>
          <div class="right">
            <switch></switch>
          </div>
        </ListItem>

        <ListHeader>Switch and icon</ListHeader>
        <ListItem>
          <div class="left">
            <icon icon="md-face" class="ListItem__icon"></icon>
          </div>
          <div class="center">
            Icon and switch
          </div>
          <div class="right">
            <switch></switch>
          </div>
        </ListItem>

        <ListHeader>No divider</ListHeader>
        <ListItem modifier="nodivider">Item A</ListItem>
        <ListItem modifier="nodivider">Item B</ListItem>

        <ListHeader>Long divider</ListHeader>
        <ListItem modifier="longdivider">Item A</ListItem>
        <ListItem modifier="longdivider">Item B</ListItem>
      </List>

      <br />

      <List modifier="inset">
        <ListHeader>Inset list</ListHeader>
        <ListItem modifier="longdivider">Item A</ListItem>
        <ListItem modifier="longdivider">Item B</ListItem>
      </List>

    </div>
  )
}
