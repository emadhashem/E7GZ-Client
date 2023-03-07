import { Box, Button, Card, CardActions, CardContent,  } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate, parsePath } from 'react-router-dom'
import { parsePathname } from '../../../global/helper'
import { IGroupPorps } from '../types'

function GroupComp({title , count} : IGroupPorps) {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    
  return (
    <Card>
        <CardContent>
            <Box >
                <p>{title}</p>
                <p>{count}</p>
            </Box>
        </CardContent>
        <CardActions>
            <Button onClick={() => navigate(`${parsePathname(pathname)}/${title}`)} >
                Explore
            </Button>
        </CardActions>
    </Card>
  )
}

export default GroupComp