import React from "react"
import { Card, CardContent, Skeleton, Typography } from "@mui/material"

const FeedSkeleton = ({ units = 20, artistField = true }) => {
  return (
    <>
      {Array(units)
        .fill(0)
        .map((_, idx) => (
          <Card
            key={idx}
            sx={{
              width: { xs: "300px", sm: "240px" },
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          >
            <Skeleton variant="rectangular" height="200px" sx={{ p: "7px 7px 0 7px" }} />

            <CardContent>
              <Typography variant="body1" fontWeight="bold">
                <Skeleton />
              </Typography>
              {artistField && (
                <Typography variant="subtitle2" color="#B2BEB5">
                  <Skeleton />
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
    </>
  )
}

export default FeedSkeleton
