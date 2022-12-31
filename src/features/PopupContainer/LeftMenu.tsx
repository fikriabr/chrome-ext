import React from 'react'
import {
  Schedule32,
  CodeSnippet32,
  Bookmarks32,
  Notification32,
  CalendarToday32,
  Satellite32,
  Air32,
  Source32,
} from '../../components/atoms/Icons'
import WorkingHourCalculator from '../WorkingHourCalculator'

export const LeftMenu = [
  {
    name: 'Work Stuff',
    isActive: true,
    menus: [
      {
        name: 'Working Hour Calculator 123',
        components: <WorkingHourCalculator />,
        icon: <Schedule32 />,
      },
      {
        name: 'Coding Snippets',
        components: <></>,
        icon: <CodeSnippet32 />,
      },
      {
        name: 'Bookmarks',
        components: <></>,
        icon: <Bookmarks32 />,
      },
      {
        name: 'Notification',
        components: <></>,
        icon: <Notification32 />,
      },
      {
        name: 'Schedule',
        components: <></>,
        icon: <CalendarToday32 />,
      },
    ],
  },
  {
    name: 'Weather',
    isActive: false,
    menus: [
      {
        name: 'Himawari 8',
        components: <></>,
        icon: <Satellite32 />,
      },
      {
        name: 'Air Meter',
        components: <></>,
        icon: <Air32 />,
      },
    ],
  },
  {
    name: 'Other',
    isActive: false,
    menus: [
      {
        name: 'Documentation',
        components: <></>,
        icon: <Source32 />,
      },
    ],
  },
]
