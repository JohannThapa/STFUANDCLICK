import React, { PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { saveSession } from '../../../store/auth/action';
import { selectSession } from '../../../store/auth/selector';
import { Redux } from '../../../store/utils/@type';

interface ComponentProps extends PropsWithChildren<{}> {}

interface StateProps {
  session: string
}

interface DispatchProps {
  saveSession: typeof saveSession
}

interface Props extends StateProps, DispatchProps, ComponentProps {}

const Authentication = ({ session, saveSession, children }: Props) => {
  useEffect(() => {
    if (!session) {
      saveSession()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  if (!session) {
    return null
  }

  return <>{children}</>
}

const mapStateToProps = (state: Redux) => ({
  session: selectSession(state),
})

export default connect(mapStateToProps, { saveSession })(Authentication)
