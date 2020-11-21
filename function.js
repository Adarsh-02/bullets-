function hasCollided(lbullet, lwall)
{
  bulletRightEdge= lbullet.x +lbullet.width;
  wallleftEdge= lwall.x;
  if(bulletRightEdge>= wallLeftEdge)
  {
    return true
  }
  return false;

}